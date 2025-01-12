import fs from 'fs/promises';
import semver from 'semver';
import * as credentials from '../../../src/interfaces/utils/credentials';
import path from 'path';

jest.mock('../../../src/utils/path', () => ({
  getCurrentDirPath: jest.fn(),
  getCurrentFilePath: jest.fn(),
}));

const schemasPath = 'src/schemas';
const schemaVersionMock = 'v0.0.3';

describe('getLastestVersionFolder', () => {
  it('should return the latest version folder name', async () => {
    const readdirSpy = jest.spyOn(fs, 'readdir') as unknown as jest.SpyInstance<Promise<string[]>>;
    readdirSpy.mockResolvedValueOnce(['aggregationEvent']);

    jest.spyOn(semver, 'maxSatisfying').mockReturnValueOnce(schemaVersionMock);
    const eventType = 'aggregationEvent';

    const latestVersionFolder = await credentials.getLastestVersionFolder(schemasPath, eventType);

    expect(latestVersionFolder).toBe(schemaVersionMock);
  });

  it('should throw an error when invalid schemas path', async () => {
    try {
      jest.spyOn(fs, 'readdir').mockRejectedValueOnce('invalid path');
      const invalidSchemasPath = 'invalid-schema-path';
      const eventType = 'aggregationEvent';

      await credentials.getLastestVersionFolder(invalidSchemasPath, eventType);
    } catch (error) {
      expect(error).toContain('invalid path');
    }
  });
});

describe('getLatestCredentialVersions', () => {
  it('should retrieve latest credential versions successfully for each event type folder', async () => {
    const readdirSpy = jest.spyOn(fs, 'readdir') as unknown as jest.SpyInstance<Promise<string[]>>;
    readdirSpy.mockResolvedValueOnce(['aggregationEvent']);
    jest.spyOn(credentials, 'getLastestVersionFolder').mockResolvedValueOnce('v0.0.3');

    const latestCredentialVersions = await credentials.getLatestCredentialVersions(schemasPath);

    expect(latestCredentialVersions).toEqual([
      {
        type: 'aggregationEvent',
        version: 'v0.0.3',
        dataPath: '',
        url: '',
      },
    ]);
  });

  it('should throw an error when invalid schemas path', async () => {
    try {
      jest.spyOn(fs, 'readdir').mockRejectedValueOnce('invalid path');
      const invalidSchemasPath = 'invalid-schema-path';

      await credentials.getLatestCredentialVersions(invalidSchemasPath);
    } catch (error) {
      expect(error).toContain('invalid path');
    }
  });

  it('should throw an error when unable to retrieve latest version folder for an invalid event type', async () => {
    const invalidSchemasPath = 'invalid-schema-path';
    const invalidEventType = 'invalid-event-type';

    try {
      const readdirSpy = jest.spyOn(fs, 'readdir') as unknown as jest.SpyInstance<Promise<string[]>>;
      readdirSpy.mockResolvedValueOnce([invalidEventType]);
      jest
        .spyOn(credentials, 'getLastestVersionFolder')
        .mockRejectedValueOnce(`Invalid event type: ${invalidEventType}`);

      await credentials.getLatestCredentialVersions(invalidSchemasPath);
    } catch (error) {
      expect(error).toContain(`Invalid event type: ${invalidEventType}`);
    }
  });
});

describe('generateCredentialFile', () => {
  const storePath = './test/credentials.json';

  it('should generate latest credential file successfully', async () => {
    const latestCredentialVersions = [{ type: 'digitalTraceabilityEvent', version: 'v0.5.0', dataPath: '', url: '' }];
    jest.spyOn(path, 'resolve').mockReturnValueOnce('../../../src/schemas');
    jest.spyOn(credentials, 'getLatestCredentialVersions').mockResolvedValueOnce(latestCredentialVersions);
    jest.spyOn(fs, 'writeFile').mockResolvedValueOnce();

    const credentialFileData = await credentials.generateCredentialFile(storePath);

    expect(fs.writeFile).toHaveBeenCalledWith(
      storePath,
      JSON.stringify({ credentials: latestCredentialVersions }, null, 2),
    );
    expect(credentialFileData).toEqual({ credentials: latestCredentialVersions });
  });

  it('should return empty array when unable to filter out default models', async () => {
    const latestCredentialVersions = [{ type: 'invalidModel', version: 'v0.0.3', dataPath: '', url: '' }];
    jest.spyOn(path, 'resolve').mockReturnValueOnce('../../../src/schemas');
    jest.spyOn(credentials, 'getLatestCredentialVersions').mockResolvedValueOnce(latestCredentialVersions);
    jest.spyOn(fs, 'writeFile').mockResolvedValueOnce();

    const credentialFileData = await credentials.generateCredentialFile(storePath);

    expect(fs.writeFile).toHaveBeenCalledWith(storePath, JSON.stringify({ credentials: [] }, null, 2));
    expect(credentialFileData).toEqual({ credentials: [] });
  });

  it('should return an empty array when the default model is empty', async () => {
    const latestCredentialVersions = [] as any;
    jest.spyOn(path, 'resolve').mockReturnValueOnce('../../../src/schemas');
    jest.spyOn(credentials, 'getLatestCredentialVersions').mockResolvedValueOnce(latestCredentialVersions);
    jest.spyOn(fs, 'writeFile').mockResolvedValueOnce();

    const credentialFileData = await credentials.generateCredentialFile(storePath);

    expect(fs.writeFile).toHaveBeenCalledWith(storePath, JSON.stringify({ credentials: [] }, null, 2));
    expect(credentialFileData).toEqual({ credentials: [] });
  });

  it('should throw an error when invalid store path', async () => {
    try {
      jest.spyOn(path, 'resolve').mockReturnValueOnce('../../../src/schemas');
      jest
        .spyOn(credentials, 'getLatestCredentialVersions')
        .mockResolvedValueOnce([{ type: 'aggregationEvent', version: 'v0.0.3', dataPath: '', url: '' }]);
      jest.spyOn(fs, 'writeFile').mockRejectedValueOnce('invalid store path');
      const invalidStorePath = 'invalid-store-path';

      await credentials.generateCredentialFile(invalidStorePath);
    } catch (error) {
      expect(error).toContain('invalid store path');
    }
  });

  it('should throw an error when invalid schemas path', async () => {
    try {
      jest.spyOn(path, 'resolve').mockReturnValueOnce('../../../src/schemas');
      jest.spyOn(credentials, 'getLatestCredentialVersions').mockRejectedValueOnce('invalid schemas path');

      await credentials.generateCredentialFile(storePath);
    } catch (error) {
      expect(error).toContain('invalid schemas path');
    }
  });
});

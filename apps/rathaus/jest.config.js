module.exports = {
  name: 'rathaus',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/rathaus',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

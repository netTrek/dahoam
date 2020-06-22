module.exports = {
  name: 'dahoam',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/dahoam',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

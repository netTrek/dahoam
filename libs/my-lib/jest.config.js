module.exports = {
  name: 'my-lib',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/my-lib',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

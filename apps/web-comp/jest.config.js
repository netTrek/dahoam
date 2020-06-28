module.exports = {
  name: 'web-comp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/web-comp',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

module.exports = async () => {
    return {
      verbose: true,
    };
  };
  module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'template-repo-2/__mocks__/fileMock.js',
    '\\.(css|less)$': 'template-repo-2/__mocks__/styleMock.js',
  },
};
module.exports = {
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
    },
    transform: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        'template-repo-2/fileTransformer.js',
    },
  };
  module.exports = {
    modulePaths: ['/shared/vendor/modules'],
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['node_modules', 'bower_components', 'shared'],
    moduleNameMapper: {
      '\\.(css|less)$': 'template-repo-2/__mocks__/styleMock.js',
      '\\.(gif|ttf|eot|svg)$': 'template-repo-2/__mocks__/fileMock.js',
    },
  };
  module.exports = {
    modulePaths: ['/shared/vendor/modules'],
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['node_modules', 'bower_components', 'shared'],
  
    moduleNameMapper: {
      '\\.(css|less)$': 'template-repo-2/__mocks__/styleMock.js',
      '\\.(gif|ttf|eot|svg)$': 'template-repo-2/__mocks__/fileMock.js',
  
      '^react(.*)$': 'template-repo-2/vendor/react-master$1',
      '^config$': 'template-repo-2/configs/app-config.js',
    },
  };
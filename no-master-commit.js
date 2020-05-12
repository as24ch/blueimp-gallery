const git = require('git-rev-sync');

const isMasterBranch = git.branch().match(/^master$/);
if (!isMasterBranch) process.exit();
console.error('\x1b[31m%s\x1b[0m', `\nDo not commit to master!\n`);
process.exit(1);

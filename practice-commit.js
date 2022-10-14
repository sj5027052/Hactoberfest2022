function time() {
  return new Date().getTime();
}

function log(msg) {
  console.log(msg);
}

function commit() {
    log(time() + ' : Committing');
    log(time() + ' : Committed');
    }

function main() {
    commit();
    }

main();

// Path: practice-rollback.js

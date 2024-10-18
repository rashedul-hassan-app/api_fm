setTimeout(() => {
    throw new Error('Error from error.js');
}, 300);

process.on('uncaughtException', (err) => {
    console.log('uncaughtException:', err.message);
});

process.on('unhandledRejection', (reason, promise) => {
    console.log('unhandledRejection:', reason);
});

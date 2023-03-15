if(!process.env.POSTGRES_URI) {
    // postgres://[user_name]:[password]@[IP Address || container name]/[database name]
    process.env.POSTGRES_URI = 'postgres://app:password@localhost:5432/db';
}

// Hook the above file inside jest.config.js
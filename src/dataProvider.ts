import awsExports from "./aws-exports";


const dataProvider = buildDataProvider(
    {
        queries,
        mutations,
    },
    {
        storageBucket: awsExports.aws_user_files_s3_bucket,
        storageRegion: awsExports.aws_user_files_s3_bucket_region,
        enableAdminQueries: true,
        import.meta.env.VITE_JSON_SERVER_URL
    }
);
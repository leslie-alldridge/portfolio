output "domain" {
  value = aws_s3_bucket.bucket.bucket_regional_domain_name
}

output "bucket_zone" {
  value = aws_s3_bucket.bucket.hosted_zone_id
}

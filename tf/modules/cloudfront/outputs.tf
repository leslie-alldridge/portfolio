output "cloudfront_domain" {
  value = aws_cloudfront_distribution.distribution.domain_name
}

output "cloudfront_zone_id" {
  value = aws_cloudfront_distribution.distribution.hosted_zone_id
}

output "cloudfront_arn" {
  value = aws_cloudfront_distribution.distribution.arn
}

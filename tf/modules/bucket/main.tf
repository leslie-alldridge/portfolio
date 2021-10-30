resource "aws_s3_bucket" "bucket" {
  bucket = var.domain
  acl    = "public-read"
  policy = <<EOF
{
    "Version": "2012-10-17",
    "Id": "bucket_policy_site",
    "Statement": [
        {
            "Sid": "public_read",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::${var.domain}/*"
        }
    ]
}
EOF

  website {
    index_document = "index.html"
    error_document = "index.html"

    routing_rules = <<EOF
[{
    "Condition": {
        "HttpErrorCodeReturnedEquals": "404"
    },
    "Redirect": {
        "ReplaceKeyWith": "index.html"
    }
}]
EOF
  }
}

resource "aws_route53_zone" "primary" {
  name = var.domain
}

resource "aws_route53_record" "route" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = var.domain
  type    = "A"
  alias {
    name                   = var.cloudfront_domain
    zone_id                = var.cloudfront_zone
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "www.${var.domain}"
  type    = "A"
  alias {
    name                   = var.cloudfront_domain
    zone_id                = var.cloudfront_zone
    evaluate_target_health = false
  }
}

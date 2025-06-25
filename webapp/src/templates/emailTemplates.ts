export interface EmailTemplateData {
  name: string
  service: string
  message: string
}

export function generateInquiryResponseHTML(data: EmailTemplateData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank you for contacting Pro Solutions Logistics</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            background-color: #ffffff;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            border-bottom: 2px solid rgb(185, 28, 28);
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .logo {
            max-width: 300px;
            height: auto;
            margin-bottom: 10px;
        }
        .greeting {
            font-size: 18px;
            color: rgb(185, 28, 28);
            margin-bottom: 20px;
        }
        .content {
            margin-bottom: 25px;
        }
        .user-message {
            background-color: #f8f9fa;
            border-left: 4px solid rgb(185, 28, 28);
            padding: 15px;
            margin: 20px 0;
            border-radius: 5px;
        }
        .contact-info {
            background-color: rgba(185, 28, 28, 0.1);
            padding: 20px;
            border-radius: 8px;
            margin: 25px 0;
        }
        .contact-info h3 {
            color: rgb(185, 28, 28);
            margin-top: 0;
        }
        .contact-details {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }
        .contact-item {
            flex: 1;
            min-width: 200px;
        }
        .contact-item strong {
            color: rgb(185, 28, 28);
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            color: #666;
            font-size: 14px;
        }
        .signature {
            margin-top: 25px;
            font-weight: bold;
            color: rgb(185, 28, 28);
        }
        a {
            color: rgb(185, 28, 28);
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        ul {
            list-style: none;
            padding-left: 0;
        }
        ul li {
            margin-bottom: 8px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://prosolutionlogistics.com/logo-rectangle.jpg" alt="Pro Solutions Logistics" class="logo">
            <p style="margin: 0; color: #666;">Reliable • On-Time • Tailored Solutions</p>
        </img>
        
        <div class="greeting">Dear ${data.name},</div>
        
        <div class="content">
            <p>Thank you for reaching out to Pro Solutions Logistics. We have received your inquiry regarding <strong>${data.service || 'our services'}</strong> and our team will review your message promptly.</p>
        </div>
        
        <div class="user-message">
            <strong>Your message:</strong><br>
            "${data.message}"
        </div>
        
        <div class="content">
            <p>We specialize in reliable, on-time delivery and tailored logistics services for businesses of all sizes. Our team of logistics experts will get back to you within <strong>24 hours</strong> to discuss how we can help with your specific needs.</p>
        </div>
        
        <div class="contact-info">
            <h3>Contact Us Directly</h3>
            <div class="contact-details">
                <div class="contact-item">
                    <strong>Phone:</strong><br>
                    <a href="tel:5166702019">(516) 670-2019</a>
                </div>
                <div class="contact-item">
                    <strong>Email:</strong><br>
                    <a href="mailto:info@prosolutionlogistics.com">info@prosolutionlogistics.com</a>
                </div>
            </div>
        </div>
        
        <div class="content">
            <h3 style="color: rgb(185, 28, 28);">Why Choose Pro Solutions Logistics?</h3>
            <ul>
                <li>2M+ sq. ft. secure warehouse space</li>
                <li>Nationwide carrier network</li>
                <li>Real-time tracking & monitoring</li>
                <li>Customized logistics solutions</li>
                <li>24/7 customer support</li>
            </ul>
        </div>
        
        <div class="signature">
            Best regards,<br>
            Pro Solutions Logistics Team
        </div>
        
        <div class="footer">
            <p>This is an automated response. You may reply to this email.</p>
            <p>&copy; 2025 Pro Solutions Logistics. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
  `
}

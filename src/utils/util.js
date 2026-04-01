export const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

export const getOTPHTML = (otp) => {
    return `
        <DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>OTP Verification</title>
        </head>
        <body>
            <h1>OTP Verification</h1>
            <p>Your OTP is: ${otp}</p>
        </body>
        </html>
    `
}
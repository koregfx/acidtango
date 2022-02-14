import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';

const transporter = nodemailer.createTransport(
	smtpTransport({
		service: 'gmail',
		host: 'smtp.gmail.com',
		auth: {
			user: 'koregfx@gmail.com',
			pass: 'mxyarrnquzwsepad',
		},
	})
);

export const sendEmail = (to, query, data) => {
	const text = `

    `;

	const mailOptions = {
		from: 'acidtango Chuck Norris Jokes Api <acidtangojokes@gmail.com>',
		to,
		subject: 'Data of your request',
		text,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
};

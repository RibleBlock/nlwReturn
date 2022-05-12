import express from "express";
import nodemailer from 'nodemailer';
import { prisma } from "./prisma";
export const route = express.Router();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "388e49c1284885",
    pass: "ba27cac1f5202b"
  }
});

route.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  //                      bd    table    operation
  const feedback = await prisma.feedback.create({
    // select: dados que seram retornados pos-criacão
    data: { // data - são quais os dados para a criacão dessa tabela
      type,
      comment,
      screenshot,
    }
  })

  // nodemailer & mailtrap.io
  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'RIquelme Aparecido <riquelmeaparecido08@gmail.com>',
    subject: 'Novo Feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`
    ].join('\n')
  })

  return res.status(201).json({data: feedback});
});

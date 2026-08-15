'use server';

import { z } from 'zod';

const requestSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  telegram: z.string().optional(),
  organization: z.string().optional(),
  role: z.string().optional(),
  message: z.string().optional(),
});

export async function submitAccessRequest(input: unknown): Promise<{ ok: boolean }> {
  const parsed = requestSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false };
  }

  const data = parsed.data;
  const lines = [
    'Новая заявка на доступ — Edge AI',
    '',
    `Имя: ${data.name}`,
    `Email: ${data.email}`,
    data.telegram ? `Telegram: ${data.telegram}` : null,
    data.organization ? `Организация: ${data.organization}` : null,
    data.role ? `Тип организации: ${data.role}` : null,
    data.message ? `Сообщение: ${data.message}` : null,
  ].filter(Boolean);

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // Пока переменные не заданы в Vercel, заявка пишется в runtime-логи.
  if (!token || !chatId) {
    console.warn('[Edge AI] Access request (Telegram not configured):', lines.join('\n'));
    return { ok: true };
  }

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: lines.join('\n') }),
    });
    return { ok: res.ok };
  } catch {
    return { ok: false };
  }
}

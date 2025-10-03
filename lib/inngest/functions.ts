import { sendWelcomeEmail } from "../nodemailer";
import { inngest } from "./client";
import { PERSONALIZED_WELCOME_EMAIL_PROMPT } from "./prompt";

export const sendSignupEmail = inngest.createFunction(
    { id: 'send-signup-email' },
    { event: 'app/user.created' },
    async ( { event, step }) => {
        const userProfile = `
        - Country: ${event.data.country}
        - Investment goals: ${event.data.investmentGoals}
        - Risk tolerance: ${event.data.riskTolerance}
        - Preferred industries: ${event.data.preferredIndustries.join(', ')}
        `

        const prompt = PERSONALIZED_WELCOME_EMAIL_PROMPT.replace('{{userProfile}}', userProfile);

        const response = await step.ai.infer('generate-welcome-intro', {
            model: step.ai.models.gemini({model: 'gemini=2.5-flash-lite'}),
                body: {
                    contents: [
                        {
                        role: 'user',
                        parts: [
                            { text: prompt }
                        ]
                    }
                ]
            }
        });

        await step.run('send-welcome-email', async () => {
            const part = response.candidates?.[0]?.content?.parts?.[0];

            const introText = (part && 'text' in part ? part.text : null) || "Thanks for signing up! We're excited to have you on board.";

            // Email sending logic

            const { data: { email, name}} = event;

            return await sendWelcomeEmail({
                email, name, intro: introText
            })
        })

        return {
            success: true,
            message: 'Signup email process completed'
        }
    }
)
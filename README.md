# Devashish AI Studio - AI Consultant Portfolio

A modern, responsive portfolio website showcasing AI consulting services and expertise.

## 🚀 Features

- **Modern Design**: Built with React, TypeScript, and Tailwind CSS
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Components**: Smooth animations and user interactions
- **Contact Form**: Integrated contact form for client inquiries
- **Project Showcase**: Display of AI consulting projects and case studies
- **Expertise Section**: Highlighting AI automation and consulting services

## 🛠️ Technologies Used

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Email**: EmailJS integration

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd devashish-ai-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── ContactForm.tsx # Contact form component
│   ├── Expertise.tsx   # Expertise showcase
│   ├── Hero.tsx        # Hero section
│   ├── Projects.tsx    # Projects showcase
│   └── ...
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Images and static assets
```

## 🎨 Customization

### Updating Content
- Edit component files in `src/components/` to update content
- Replace images in `src/assets/` with your own
- Update contact information in the ContactForm component

### Styling
- Modify Tailwind classes in component files
- Update global styles in `src/index.css`
- Customize theme in `tailwind.config.ts`

## 📧 Contact Form Setup

The contact form uses EmailJS for sending emails. To set it up securely:

1. **Create an EmailJS account** at [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. **Set up email service and template** in your EmailJS dashboard
3. **Configure credentials securely**:
   - Copy `src/config/emailjs.example.ts` to `src/config/emailjs.ts`
   - Fill in your actual EmailJS credentials in the new file
   - The `emailjs.ts` file is already added to `.gitignore` to keep credentials secure

### EmailJS Credentials Needed:
- **Service ID**: From Email Services section
- **Template ID**: From Email Templates section  
- **Public Key**: From Account settings

### Template Configuration:
- **From Email**: Set to your verified email address
- **From Name**: Use `{{from_name}}`
- **Reply-To**: Use `{{reply_to}}`
- **Subject**: Include relevant variables like `{{project_type}}`

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Other Platforms
The built files in the `dist` folder can be deployed to any static hosting service.

## 📄 License

This project is private and proprietary to Devashish AI Studio.

## 🤝 Support

For support or inquiries, please contact through the website's contact form or reach out directly.

---

Built with ❤️ by Devashish AI Studio
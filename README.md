# Trial - Gamified Video Platform

A dark, modern landing page for **Trial**, a gamified short-form video platform where creators upload videos that must survive a trial-by-engagement. Built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Features

- 🎨 **Dark Theme**: Sleek, modern design with dramatic aesthetics
- 📱 **Fully Responsive**: Optimized for desktop and mobile
- ⚔️ **Dual Waitlists**: Separate signup flows for creators and viewers
- 📧 **Email Validation**: Built-in form validation
- 🎯 **Supabase Integration**: Ready for database storage
- 🚀 **Host-Ready**: Optimized for Vercel and Netlify deployment

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Deployment**: Vercel/Netlify ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd trial-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase database**
   
   Create a table called `waitlist` in your Supabase database with the following SQL:
   
   ```sql
   CREATE TABLE waitlist (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     email VARCHAR(255) NOT NULL,
     type VARCHAR(20) NOT NULL CHECK (type IN ('creator', 'viewer')),
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Add index for better performance
   CREATE INDEX idx_waitlist_email ON waitlist(email);
   CREATE INDEX idx_waitlist_type ON waitlist(type);
   CREATE INDEX idx_waitlist_created_at ON waitlist(created_at);
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the landing page.

## Project Structure

```
trial-website/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/
│   ├── About.tsx            # About section component
│   ├── Footer.tsx           # Footer with social links
│   ├── Hero.tsx             # Hero section with CTAs
│   └── Modal.tsx            # Waitlist signup modal
├── lib/
│   └── supabase.ts          # Supabase client and utilities
├── .env.example             # Environment variables template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## Components

### Hero
- Dramatic landing section with Trial logo
- Two prominent CTA buttons for creators and viewers
- Smooth animations and hover effects

### Modal
- Reusable waitlist signup modal
- Email validation
- Success/error states
- Different content for creators vs viewers

### About
- Project description with visual cards
- Explains the concept of Trial
- Role-based information (creators, judges, champions)

### Footer
- Social media links (placeholders)
- GitHub repository link
- Copyright information

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in the Vercel dashboard
   - Deploy

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder, or connect your Git repository
   - Configure environment variables
   - Deploy

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  'trial-red': '#DC2626',    // Primary action color
  'trial-gold': '#F59E0B',   // Secondary accent color
  'trial-gray': '#1F2937',   // Dark backgrounds
}
```

### Typography
The project uses Inter font. Update in `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your-Font:wght@300;400;500;600;700;900&display=swap');
```

### Logo
Replace the placeholder logo in `components/Hero.tsx` with your actual logo image.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

For support and questions:
- Open an issue on GitHub
- Contact the development team

---

**Trial** - Enter the arena. Survive the trial. ⚔️

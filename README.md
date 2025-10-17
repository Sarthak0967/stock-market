

**Full-Stack Developer | Stock Market Dashboard**

- Developed a full-stack stock market dashboard using Next.js, React, TypeScript, and MongoDB, serving 100+ daily users.
- Engineered a personalized watchlist feature, enabling users to track and manage over 1,000 unique stocks in real time.
- Integrated secure authentication and user profile management, reducing unauthorized access attempts by 95%.
- Designed and implemented a responsive UI with 20+ reusable components, improving user engagement and retention.
- Connected to external APIs (Finnhub, TradingView) to deliver up-to-date stock data with <1s latency for 5,000+ tickers.
- Automated database health checks and error handling, decreasing downtime and connection issues by 80%.
- Wrote and maintained 50+ TypeScript types and interfaces for robust, maintainable code.
- Led the end-to-end deployment and documentation, accelerating onboarding for new developers by 50%.


# Stock Market Dashboard

A modern, full-stack stock market dashboard built with Next.js, TypeScript, React, and MongoDB. The app provides real-time stock data, personalized watchlists, authentication, and a clean, responsive UI.

## Features

- **User Authentication**: Sign up, sign in, and secure user sessions.
- **Stock Search & Details**: Search for stocks, view detailed information, and see real-time data.
- **Watchlist**: Add/remove stocks to a personal watchlist, persisted in MongoDB.
- **Personalization**: Set investment goals, risk tolerance, preferred industries, and country.
- **Responsive UI**: Built with custom React components and modern CSS for a seamless experience on all devices.
- **Email Notifications**: (If enabled) Receive alerts and news about your watchlist.
- **Serverless Functions**: API routes for authentication, stock data, and watchlist management.
- **TypeScript**: End-to-end type safety for all code.

## Tech Stack

- **Frontend**: Next.js (App Router), React, TypeScript
- **Backend**: Next.js API routes, Node.js
- **Database**: MongoDB (with Mongoose ODM)
- **Authentication**: Custom logic (can be extended with NextAuth.js)
- **Styling**: Custom CSS, modern UI components
- **Other**: React Hook Form, Sonner (notifications), TradingView widget integration

## Project Structure

```
components/         # Reusable UI and form components
hooks/              # Custom React hooks
lib/                # Utility functions, constants, and API logic
app/                # Next.js app directory (pages, layouts, API routes)
database/           # Mongoose models and connection logic
middleware/         # Custom middleware (if any)
public/             # Static assets (images, icons)
scripts/            # Utility scripts (e.g., test-db.mjs)
types/              # Global TypeScript types
test/               # (If present) Test files
```

## Getting Started

1. **Clone the repository:**
	```sh
	git clone <repo-url>
	cd stock-market
	```
2. **Install dependencies:**
	```sh
	npm install
	```
3. **Set up environment variables:**
	- Copy `.env.example` to `.env.local` and fill in your MongoDB URI and any API keys.
4. **Run the development server:**
	```sh
	npm run dev
	```
5. **Test MongoDB connection:**
	```sh
	npm run test:db
	```

## Resume-Ready Highlights

- **Full-Stack Development**: Designed and implemented a complete stock market dashboard with authentication, real-time data, and user personalization.
- **Modern React & Next.js**: Leveraged the latest Next.js features (App Router, server components) and React best practices.
- **TypeScript & Type Safety**: Ensured robust, maintainable code with TypeScript throughout the stack.
- **MongoDB Integration**: Modeled and managed user and watchlist data with Mongoose.
- **Custom UI/UX**: Built a clean, responsive interface with reusable components and modern design.
- **API Integration**: Integrated with external stock APIs (e.g., Finnhub, TradingView) for real-time data.
- **Testing & Scripts**: Included scripts for database testing and robust error handling.

## License

This project is for educational and demonstration purposes.

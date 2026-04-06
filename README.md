# Portfolio - Arthan Kyle

A modern, dark-themed developer portfolio built with React and Vite, showcasing projects, tech stack, and professional experience.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile
- **Dark Theme**: Modern dark UI with smooth animations and transitions
- **Real-time GitHub Stats**: Live GitHub statistics using GraphQL API
- **Component-Based Architecture**: Clean, modular React components
- **Smooth Navigation**: Sticky navbar with smooth scrolling to sections
- **Interactive Cards**: Hover effects and transitions on project and stat cards

## Sections

1. **Hero**: Introduction with call-to-action buttons
2. **About**: Professional background with live GitHub statistics
3. **Tech Stack**: Technologies and tools organized by expertise level
4. **Projects**: Showcase of 5 major projects with descriptions and links
5. **Contact**: Multiple contact methods with social links
6. **Footer**: Copyright and social media links

## Tech Stack

- **Frontend**: React 19, Vite 8
- **Styling**: CSS3 with custom properties
- **Icons**: React Icons
- **API**: GitHub GraphQL API
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ArthanKyle/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Set up GitHub token for real-time stats:
```bash
cp .env.example .env
# Add your GitHub token to .env
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── TechStack.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── .env.example
└── package.json
```

## GitHub Stats Integration

The portfolio fetches real-time GitHub statistics using the GitHub GraphQL API. To enable this feature:

1. Create a GitHub Personal Access Token at [https://github.com/settings/tokens](https://github.com/settings/tokens)
2. Required scope: `read:user`
3. Add the token to your `.env` file:
```
VITE_GITHUB_TOKEN=your_token_here
```

Without a token, the app will fall back to the REST API with limited data.

## Customization

To customize the portfolio for your own use:

1. Update personal information in `Hero.jsx`
2. Modify projects in `Projects.jsx`
3. Update tech stack in `TechStack.jsx`
4. Change contact information in `Contact.jsx`
5. Update GitHub username in `About.jsx` (line with GraphQL query)
6. Adjust colors in `App.css` (CSS variables in `:root`)

## License

MIT License - feel free to use this template for your own portfolio.

## Author

**Arthan Kyle Job E. Ydeo**
- GitHub: [@ArthanKyle](https://github.com/ArthanKyle)
- LinkedIn: [Arthan Kyle](https://linkedin.com/in/arthankyle)
- Email: arthankyle.ydeo@gmail.com

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)

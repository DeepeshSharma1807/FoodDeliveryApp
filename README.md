# 🍕 FoodieExpress - My First React Food Delivery App

Hey there! This is my food delivery app that I built while learning React. I'm still pretty new to web development, but I'm excited to share what I've created so far!

## 🎯 What This App Does

I built this app to practice React concepts I've been learning. It's inspired by Swiggy (the food delivery app) and lets you:

- Browse restaurants with their ratings and food types
- Search for restaurants by name (pretty cool, right?)
- Filter restaurants to show only the highly rated ones (4.3+ stars)
- Click on restaurants to see their full menu
- Check if you're online or offline (learned this with custom hooks!)
- Navigate between different pages smoothly

## 🛠️ Technologies I Used

I picked these technologies because they seemed beginner-friendly and are popular in the industry:

- **React 19.1.1** - For building the user interface (still wrapping my head around components!)
- **Tailwind CSS 4.1.13** - For styling (way easier than writing CSS from scratch)
- **React Router DOM** - For navigation between pages
- **Vite** - Modern build tool (upgraded from Parcel for better performance and dev experience!)
- **Swiggy API with Mock Data Fallback** - Real restaurant data with reliable fallback system
- **Google Fonts** - Using Poppins font to make it look professional

## 📂 How I Organized My Code

I tried to keep things organized (still learning best practices):

```
src/
├── components/           # All my React components (converted to .jsx)
│   ├── Header.jsx       # Top navigation bar with Tailwind styling
│   ├── Body.jsx         # Main page with restaurant list and search
│   ├── RestaurantCard.jsx # Individual restaurant cards
│   ├── RestaurantMenu.jsx # Menu page for each restaurant
│   ├── About.jsx        # About page
│   ├── Contact.jsx      # Contact page
│   ├── shimmer.jsx      # Loading animation (learned about UX!)
│   └── UserClass.jsx    # My profile using class component
├── util/                # Helper functions, custom hooks, and mock data
│   ├── constants.js     # API URLs and other constants
│   ├── mockData.js      # Fallback restaurant data for reliability
│   ├── mockMenuData.js  # Fallback menu data for when APIs fail
│   ├── useOnlineStatus.js # Custom hook I created!
│   └── useRestaurantMenu.js # Custom hook with mock data fallback
├── App.jsx              # Main app file with routing setup
├── main.jsx             # Entry point (Vite structure)
├── vite.config.js       # Vite configuration
└── netlify.toml         # Deployment configuration
```

## 🧠 What I Learned Building This

This project helped me understand:

**React Basics:**
- How components work and talk to each other
- Managing state with `useState` (still getting used to this!)
- Side effects with `useEffect` 
- Passing data through props

**Advanced Concepts:**
- Creating my own custom hooks (felt like a real developer!)
- React Router for multiple pages
- Working with real APIs with fallback systems for reliability
- Conditional rendering based on data
- Modern build tools (migrated from Parcel to Vite)

**Styling & Design:**
- Tailwind CSS classes (so much faster than regular CSS)
- Creating hover effects and animations
- Using gradients and shadows for modern look

**Best Practices I'm Learning:**
- Keeping components small and focused
- Separating logic into custom hooks
- Organizing files properly with proper extensions (.jsx for React components)
- Writing clean, readable code
- Using modern build tools for better development experience

## 🎨 Features I'm Proud Of

**Search Functionality**: I implemented a search bar that filters restaurants as you type. It was tricky getting the state management right!

**Online Status Indicator**: Created a custom hook that shows if you're online or offline. Learned about browser APIs for this.

**Responsive Design**: Used Tailwind to make it look good on both desktop and mobile. Still learning about breakpoints!

**Loading States**: Added shimmer loading effects so users know something is happening while data loads.

**Reliable Data System**: Implemented mock data fallback system so the app works even when APIs are down or have CORS issues.

**Smooth Navigation**: Used React Router to create a single-page app experience.

**Modern Build System**: Migrated from Parcel to Vite for faster development and better performance.

## 🚧 Challenges I Faced

- **State Management**: Understanding when to use state vs props took time
- **API Integration**: Handling loading states and errors was confusing at first
- **CORS Issues**: External APIs blocked by browsers, solved with mock data fallback system
- **Build Tool Migration**: Moving from Parcel to Vite required updating file extensions and configurations
- **Tailwind CSS**: Learning all the class names, but it's getting easier
- **Component Structure**: Figuring out how to break down the UI into components
- **File Extensions**: Learning when to use .js vs .jsx for React components



## 🔮 What I Want to Add Next

I have big plans for this app (when I learn more):

- **Shopping Cart**: Add items to cart and checkout
- **User Login**: Authentication so users can save favorites
- **Payment Integration**: Maybe Stripe or PayPal
- **Order Tracking**: Real-time order status
- **Reviews**: Let users rate restaurants
- **Backend**: Build my own API instead of using Swiggy's
- **Progressive Web App**: Make it installable on mobile devices

## 🤔 What I'd Do Differently

Looking back, I would:
- Plan the component structure better from the start
- Use TypeScript (heard it's good for catching errors)
- Add more error handling (though the mock data fallback helps!)
- Use a state management library for complex data
- Start with Vite from the beginning instead of migrating later
- Implement proper error boundaries for better user experience

## 👨‍💻 About Me

**Deepesh Sharma**

I'm a MCA student at VIT College who's passionate about web development. This is one of my first major React projects, and I'm excited to keep learning and building more cool stuff!

- 📧 Email: deepesh.sde@gmail.com
- 🎓 Currently studying: MCA at VIT College
- 💻 Learning: React, JavaScript, and modern web development
- 🎯 Goal: Become a skilled frontend developer

## 🙏 Acknowledgments

- Thanks to the React documentation (read it multiple times!)
- Tailwind CSS docs for making styling easier
- YouTube tutorials that helped me understand concepts
- Stack Overflow for solving my bugs 😅

---

*This project represents my journey learning React. It's not perfect, but I'm proud of how far I've come! Always open to feedback and suggestions for improvement.*

**Built with ❤️, lots of coffee ☕, and determination to learn React!**

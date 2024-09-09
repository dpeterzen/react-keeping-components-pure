import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ClockApp from './ClockApp/ClockApp.jsx';
import ProfileApp from "./ProfileApp/ProfileApp.jsx";
import StoryTrayApp from './StoryTrayApp/StoryTrayApp.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ClockApp /> */}
    {/* <ProfileApp /> */}
    <StoryTrayApp />
  </StrictMode>,
)


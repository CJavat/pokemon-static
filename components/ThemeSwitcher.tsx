import {useEffect, useState} from "react";
import { Button } from "@nextui-org/react";
import {useTheme} from "next-themes";


export const ThemeSwitcher = () => {
  const [isClient, setIsClient] = useState(false)

  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setIsClient(true)
  }, [])


  return isClient ? (
    <div>
      The current theme is: {theme}
      <Button color="secondary" onClick={() => setTheme('light')}>Light Mode</Button>
      <Button color="primary" onClick={() => setTheme('dark')}>Dark Mode</Button>
    </div>
  ): null
};
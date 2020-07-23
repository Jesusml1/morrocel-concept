import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root{
    /* Color palette */
    --Rangitoto:        #2B3323;  /* Dark green     */
    --Moon-Mist:        #DDDFD3;  /* Light beige    */
    --Kangaroo:         #C1C4B6;  /* Dark beige     */
    --Battleship-Gray:  #7B8C74;  /* Light green    */
    --Clear-Beige:      #F4F4F0;
    /* Font color */
    --Cocoa-Bean:       #481D1F;  /* Main font      */
    --White:            #FFFFFF;  /* Secondary font */
    --Black:            #000000;  /* Content font   */
    /* Media */
    --media-size: 768px;
  }
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`
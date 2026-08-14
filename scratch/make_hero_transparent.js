import fs from "fs"
import { createCanvas, loadImage } from "canvas" // or pure pixel manipulation

// Convert checkerboard background of media__1786113644276.jpg to transparent
// Since it's a JPG/PNG with light checkerboard background (R>220, G>220, B>220 or near white/grey grid)
// We will write a pure JS JPG/PNG buffer processor or canvas script.

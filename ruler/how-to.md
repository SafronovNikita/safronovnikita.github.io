# Installation

1. Go to Chrome Web Store and install the extension.
2. Click on the extensions icon in the top right corner of the browser. (it looks like puzzle piece)
3. Find the `Pixel Screen Ruler` extension and pin it to the toolbar. (click on the pin icon)
4. Open new tab or refresh the current one to ensure the extension is loaded.
5. Click on the `Pixel Screen Ruler` icon to open the ruler.
6. Enjoy!

# How to use

1. Open the ruler by clicking on the extension icon.
2. In the top right corner you will see a toolbar. Here you can find:
   - drag handle (to move toolbar around)
   - help button (opens this guide)
   - settings button
   - exit button
   - collapse toolbar button (you can collapse toolbar to save space)
   - current mode indicator (there are 3 modes: initial, input, edit)
   - hint (explains what you can do in the current mode)
3. Steps to measure:
   1. Initial mode
      1. Click anywhere on the page to set first point.
      2. You will enter the `Input mode`.
   2. Input mode
      1. Click anywhere on the page to set second point.
      2. Continue adding points as you need.
      3. When you are done, press Escape to proceed to `Edit mode`.
   3. Edit mode
      1. You can drag lines and points to adjust them.
      2. You can copy measure results to clipboard by clicking the tooltip with the value.
      3. In this mode you can interact with browser (click buttons, etc.) while your measurements remain on the page as overlay, so you can use them as guides.
      4. To clear all measurements, press Escape. You will get back to the `Initial mode`.
   4. Initial mode (again)
      1. You can press Escape to exit the ruler.
      2. Or you can start measuring again!

# Hotkey

You can use hotkey to toggle the ruler on and off.
By default, it's `Option + Shift + R` on Mac and `Alt + Shift + R` on Windows.
You can change or disable it in chrome settings: **chrome://extensions/shortcuts** <!-- browser doesn't allow to open this link -->

# Pixel-perfect precision

In this section you will learn how to use the ruler with pixel-perfect precision.

Let's start with a sample to measure.
Here we have rectangle with the following CSS properties:

```css
{
  width: 6px;
  height: 5px;
  left: 3px;
  top: 4px;
}
```

![](https://logosnikita.com/ruler/images/gif_1.png)

## To measure rectangle size:

1. align left edge of the first point with the left edge of the box.
2. then, align left edge of the second point with the right edge of the box.
3. measure the height accordingly.

The logic is the same as with the physical ruler.

![](https://logosnikita.com/ruler/images/1.gif)

### Correct and wrong

✅ Correct: put one point inside the rectangle, another outside.

![](https://logosnikita.com/ruler/images/do.png)

---

❌ Wrong: don’t put both points inside the rectangle

![](https://logosnikita.com/ruler/images/dont_1.png)

---

❌ Wrong: don’t put both points outside the rectangle

![](https://logosnikita.com/ruler/images/dont_2.png)

## To measure pixel position

1. position cursor at the pixel you want to measure.
   1. Ruler's lines have thickness of 1 px, so it's easy to see the exact position.
2. Position of point is equal to indices of the pixel it's located on.
   1. Indices start from 0, so x=3 means that there are 3 pixels to the left and current pixel is the 4th.

![](https://logosnikita.com/ruler/images/2.gif)

# Color Picker App

A simple React color picker component that lets users choose a color and
see the selection applied instantly to the component's background.

## Features

-   Uses the browser's native color input.
-   Starts with white (`#ffffff`) as the default color.
-   Updates the background color whenever a new color is selected.
-   Displays the currently selected color as a hexadecimal value.
-   Uses React state to keep the color input and displayed result in
    sync.

## Built With

-   **React**
-   **JavaScript (ES6+)**
-   **HTML** (JSX)
-   **Inline CSS styling**

## How It Works

1.  The component initializes its `color` state to `#ffffff`.
2.  The color input is controlled by this state through its `value`
    prop.
3.  When the user selects a color, the `onChange` handler updates the
    state.
4.  The selected color is applied to the container's `backgroundColor`
    style and displayed in the text below the input.


## Component Structure

-   **`ColorPicker`** --- the exported React component.
-   **`color` state** --- stores the currently selected hexadecimal
    color.
-   **`handleColorChange`** --- updates the state when the user chooses
    a different color.
-   **Color input** --- allows the user to select a color.
-   **Selected color display** --- shows the current color value.


## Future Improvements

-   Add a copy-to-clipboard button for the selected color.
-   Show color values in additional formats, such as RGB and HSL.
-   Add preset color swatches.
-   Improve the layout with a dedicated CSS file.

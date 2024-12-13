const lerp = (a: number, b: number, n: number): number => (1 - n) * a + n * b;

// Gets the mouse position
const getMousePos = (e: MouseEvent) => {
    return { 
        x: e.clientX, 
        y: e.clientY 
    };
};

// This function generates a random string of a given length
const getRandomString = (length: number): string => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

export { lerp, getMousePos, getRandomString };
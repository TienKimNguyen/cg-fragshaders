#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 color = texture(image, texcoord);
    float L = 0.299 * color.r + 0.587 * color.g + 0.114 * color.b;
    color.r = L;
    color.g = L;
    color.b = L;
    FragColor = color;
}

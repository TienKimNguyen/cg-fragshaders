#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 color = texture(image, texcoord);
    color.r = round(color.r * 4.0) / 4.0;
    color.g = round(color.g * 4.0) / 4.0;
    color.b = round(color.b * 4.0) / 4.0;
    FragColor = color;
}

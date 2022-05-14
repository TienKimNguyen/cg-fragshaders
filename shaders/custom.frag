#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 color = texture(image, texcoord);
    color.r = color.r * 1.3;
    color.g = color.g * 1.0;
    color.b = color.b * 0.9;
    FragColor = color;
}

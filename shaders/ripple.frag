#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 transform_texcoord = texcoord * 2.0 - 1.0;
    float radius = length(transform_texcoord);
    vec2 offset = transform_texcoord * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;
    vec2 final_texcoord = texcoord + offset;
    FragColor = texture(image, final_texcoord);
}

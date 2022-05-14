#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 transform_texcoord = texcoord * 2.0 - 1.0;
    float theta = atan(transform_texcoord.y, transform_texcoord.x);
    float radius = pow(length(transform_texcoord), 1.5);
    vec2 fisheye_texcoord = vec2(radius * cos(theta), radius * sin(theta));
    vec2 final_texcoord = 0.5 * (fisheye_texcoord + 1.0);
    FragColor = texture(image, final_texcoord);
}

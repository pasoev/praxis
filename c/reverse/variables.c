#include <stdint.h>

#define XXX __asm__("nop");

struct data {
    uint32_t field1;
    uint64_t field2;
};

int main() {
    // Different datatypes in C
    XXX;
    volatile int a = 0x1234;
    XXX;
    volatile unsigned int b = 0x1234;
    XXX;
    volatile uint32_t c = 0x1234;
    XXX;
    volatile uint64_t d = 0x1234;
    XXX;
    volatile int e = -0x1234;
    XXX;
    volatile unsigned int f = -0x1234;
    XXX;
    volatile float g = 0;
    XXX;
    volatile float h = 12.34;
    XXX;
    volatile float i = -12.34;
    XXX;
    volatile double j = 0;
    XXX;
    volatile double k = 12.34;
    XXX;
    volatile double l = -12.34;
    XXX;
    volatile uint32_t m[10] = {0x0, 0x1, 0x22, 0x333, 0x444};
    XXX;
    volatile uint32_t m2 = m[2];
    XXX;
    volatile char n = 'A';
    XXX;
    volatile uint8_t o = 'B';
    XXX;
    volatile const char *p = "AAAA";
    XXX;
    volatile char *q = "BBBB";
    XXX;
    XXX;
    XXX;
    // The struct
    volatile struct data s = {0};
    XXX;
    s.field1 = 0x41414141414141;
    XXX;
    s.field2 = 0x414141;
    XXX;
    XXX;
    XXX;
    return 0;
}
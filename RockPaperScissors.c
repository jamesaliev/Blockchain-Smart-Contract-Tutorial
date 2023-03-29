#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int main(void){
    bool notDone = false;
    while (!notDone) {
        printf("Input rock (R), paper (P), or scissors(S): ");
        char input;
        char cpuPick;
        int playerSelect;
        
        scanf("%c", &input);
        int cpuSelect = rand() % 3;

        switch (cpuSelect) {
        case 0:
            cpuPick = 'R';
            break;
        case 1:
            cpuPick = 'P';
            break;
        case 2:
            cpuPick = 'S';
            break;
        }

        if (input == 'R') {
            playerSelect = 0;
            notDone = true;

        } else if (input == 'P') {
            playerSelect = 1;
            notDone = true;

        } else if (input == 'S') {
            playerSelect = 2;
            notDone = true;

        } else {
            continue;
        }

        printf("You picked: %c\nThe CPU picked: %c\n", input, cpuPick);
        if (playerSelect == cpuSelect) {
            printf("Draw\n");
        } else if ((playerSelect == 0 && cpuSelect == 1) || (playerSelect == 1 && cpuSelect == 2) || (playerSelect == 2 && cpuSelect == 0)) {
            printf("You Lose\n");
        } else if ((cpuSelect== 0 && playerSelect == 1) || (cpuSelect == 1 && playerSelect == 2) || (cpuSelect == 2 && playerSelect == 0)) {
            printf("You Win\n");
        }
    }
}
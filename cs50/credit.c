//#include <cs50.h>
//#include <stdio.h>
//#include <math.h>

int main(void) 
{
    long card;
    
    card = get_long("Number: ");
    
    long temp_card = card;
    long temp_card2 = card;
    int card_company;
    int card_length = 2;
    int sum = 0;
    
    
    
    while (temp_card > 100)
    {
        temp_card = temp_card / 10;
        card_length ++;
    }
    
    for (int i = 1; i <= card_length; i++)
    {
        int d = temp_card2 % 10;
        if (i % 2 == 0)
        {
            if (d * 2 > 9)
            {
                sum += (d * 2) - 9;
            }
            else
            {
                sum += d * 2;
            }
        }
        else
        {
            sum += d;
        }
        temp_card2 /= 10;
    }
    
    bool tok = (sum % 10 == 0) ? true : false;
    
    if (card_length == 15 && (temp_card == 34 || temp_card == 37) && tok)
    {
        printf("AMEX\n");
    }
    else if(card_length == 16 && (temp_card > 50 && temp_card < 56) && tok)
    {
        printf("MASTERCARD\n");
    }
    else if((card_length == 13 || card_length == 16) && (temp_card / 10 ==4) && tok)
    {
        printf("VISA\n");
    }
    else
    {
        printf("INVALID\n");
    } 
    
}

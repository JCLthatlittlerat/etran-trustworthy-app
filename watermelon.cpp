#include iostream;
using namespace std;

int main(){
    int weight;
    int share;
    cout<< 'please the weight of your watermelo';
    cin>> weight;

    share = weight/2;
    if(share%2==0){
        cout<< "YES"
    }else{
        cout<<"NO"
    }

}
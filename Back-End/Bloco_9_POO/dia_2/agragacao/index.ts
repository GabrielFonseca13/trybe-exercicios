class Friend {
  private nickname: string;

  constructor(ninckname: string) {
    this.nickname = ninckname;
  }

  public getNickname(): string {
    return this.nickname;
  }

  public setNickname(nickname: string) {
    this.nickname = nickname;
  }
}

class SocialMediaAccount2 {
  private friends = new Array<Friend>();

  public addFriend(friend: Friend) {
    this.friends.push(friend);
  }

  public printFriends() {
    this.friends.map((friend) => console.log(friend));
  }
}

const socialMediaAccount2 = new SocialMediaAccount2();

const friendCarol = new Friend('Carol');
friendCarol.setNickname('Carol');

const friendFernando = new Friend('Carol');
friendFernando.setNickname('Fernando');

socialMediaAccount2.addFriend(friendCarol);
socialMediaAccount2.addFriend(friendFernando);
socialMediaAccount2.printFriends();
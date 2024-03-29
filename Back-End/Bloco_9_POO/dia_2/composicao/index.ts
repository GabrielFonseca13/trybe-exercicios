class Profile {
  private name: string;
  private email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public toString(): string {
    return `name - [${this.name}] - email - [${this.email}]`;
  }
}

class SocialMediaAccount {
  // Cria nossa composição com o perfil
  private profile = new Profile('cadu', 'cadu@email.com');

  public editProfile(name: string, email: string) {
    this.profile.setName(name);
    this.profile.setEmail(email);
  }

  public printProfile() {
    console.log(this.profile.toString());
  }
}

const socialMediaAccount = new SocialMediaAccount();
socialMediaAccount.printProfile();
socialMediaAccount.editProfile('Manuella', 'manu@trybe.com');
socialMediaAccount.printProfile();
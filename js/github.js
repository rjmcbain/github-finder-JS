class Github {
  constructor() {
    this.client_id = "7f368a2fd9321f8b5cc3";
    this.client_secret = "97af44a4d7e37118afc6a268bce20f244d7cf4e1";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/rjmcbain/${user}?client_id=${
        this.client_id
      }&client_secret=&${this.client_secret}`
    );

    const profileData = await profileResponse.json();

    return {
      profile: profileData
    };
  }
}

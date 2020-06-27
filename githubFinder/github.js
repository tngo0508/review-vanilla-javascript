class GitHub {
  constructor() {
    this.client_id = "620c5e2a627e1500363e";
    this.client_secret = "bba6b77f52596617cef3bb5762fd8cd61400b833";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}

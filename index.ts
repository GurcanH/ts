interface PostGatekeeper {
  title: string;
  daysOld: number;
  published: boolean;
}

const post = {
  title: 'Latest Typrescript News',
  daysOld: 10,
  published: true
};

const printPost = (postToPrint: PostGatekeeper) => {
  return `${postToPrint.title} (${postToPrint.daysOld} days old}`;
};

console.log(printPost(post));

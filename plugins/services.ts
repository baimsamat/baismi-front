import { FakeRepo } from '~/repo/fake-repo';
import { HttpRepo } from '~/repo/http-repo';
import { UrlGenerator } from '~/repo/url-generator';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const { USE_FAKE_BACKEND } = config.public;
  const urlGenerator = new UrlGenerator();

  const projectRepo = USE_FAKE_BACKEND
    ? new FakeRepo()
    : new HttpRepo(urlGenerator);

  return {
    provide: {
      projectRepo
    }
  };
});

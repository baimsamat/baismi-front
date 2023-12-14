export class UrlGenerator {
  private apiBaseUrl = 'http://localhost:1337/api';

  private getUrl(path: string): string {
    return `${this.apiBaseUrl}${path}`;
  }

  articles(type: string = '', page: number = 1): string {
    const params = {
      'filters[type][$eq]': type,
      'sort[0]': 'id:desc',
      'pagination[page]': `${page}`,
      'pagination[pageSize]': `${10}`,
      populate: 'source,magazine'
    };

    const searchParams = new URLSearchParams(clearEmptyProperties(params));

    return this.getUrl(`/articles?${searchParams.toString()}`);
  }

  articleById(id: number): string {
    return this.getUrl(`/articles/${id}?populate=source,magazine`);
  }
}

function clearEmptyProperties(obj: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => value !== '')
  );
}

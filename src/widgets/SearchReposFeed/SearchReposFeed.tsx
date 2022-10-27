import { list, reflect } from '@effector/reflect';
import { Container } from 'rsuite';

import { LangText } from '@/entities/Lang';
import { LicenseName } from '@/entities/License';
import { RepoCard } from '@/entities/Repo';
import { StargazersCount } from '@/entities/Stargazer';
import { UpdatedAtText } from '@/entities/Time';
import { TopicBadge } from '@/entities/Topic';
import {
  SearchReposEmpty,
  SearchReposForm,
  searchReposModel,
  SearchReposPagination,
  TSearchReposResultData,
} from '@/features/searchRepos';

const SearchReposListItem = (repo: TSearchReposResultData['items'][number]) => {
  return (
    <RepoCard key={repo.id}>
      <RepoCard.Header name={repo.name} ownerName={repo.owner?.login ?? ''} />
      {repo.description && <RepoCard.Body description={repo.description} />}
      <RepoCard.Footer>
        <>
          {!!repo.topics?.length && (
            <Container className='mt-auto flex-row flex-wrap gap-1'>
              {repo.topics.map((topic) => (
                <TopicBadge key={topic} name={topic} />
              ))}
            </Container>
          )}
          <Container className='flex-row items-end gap-3 text-xs'>
            <StargazersCount count={repo.stargazers_count} />
            {repo.language && <LangText name={repo.language} />}
            {repo.license && <LicenseName name={repo.license.name} />}
            <UpdatedAtText date={new Date(repo.updated_at)} />
          </Container>
        </>
      </RepoCard.Footer>
    </RepoCard>
  );
};

const SearchReposList = list({
  source: searchReposModel.$searchedRepos,
  view: SearchReposListItem,
  getKey: ({ id }) => id,
});

type TSearchReposFeedViewProps = {
  isLoading: boolean;
  isEmpty: boolean;
};

const SearchReposFeedView = ({ isEmpty }: TSearchReposFeedViewProps) => {
  return (
    <Container className='flex w-full flex-col gap-6'>
      <SearchReposForm />
      {isEmpty ? (
        <SearchReposEmpty />
      ) : (
        <>
          <Container className='grid gap-4 xl:grid-cols-3'>
            <SearchReposList />
          </Container>
          <SearchReposPagination />
        </>
      )}
    </Container>
  );
};

export const SearchReposFeed = reflect({
  view: SearchReposFeedView,
  bind: {
    isEmpty: searchReposModel.$searchedReposIsEmpty,
  },
});

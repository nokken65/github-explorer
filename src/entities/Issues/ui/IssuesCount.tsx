import { Text } from '@nextui-org/react';
import { memo, useMemo } from 'react';

type TIssuesCountProps = {
  count: number;
  hasIssues: boolean;
};

const IssuesCountView = ({ count, hasIssues }: TIssuesCountProps) => {
  const formattedCount = useMemo(
    () => `${count} ${count === 1 ? 'issue' : 'issues'}`,
    [],
  );

  return (
    <>
      {count > 0 && (
        <Text
          color={hasIssues ? 'warning' : 'default'}
          css={{
            fontSize: '$sm',
            whiteSpace: 'nowrap',
          }}
        >
          {formattedCount}
        </Text>
      )}
    </>
  );
};

export const IssuesCount = memo(IssuesCountView);

"use client";

import { useRef, useState, type ChangeEvent, type SubmitEvent } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/Button";
import { TextField } from "@/components/TextField";
import { DEFAULT_PEOPLE } from "@/constants/trip";
import { useNotice } from "@/contexts/NoticeContext";
import { createTrip } from "@/lib/api";
import { queryKeys } from "@/lib/queryKeys";
import * as styles from "./TripForm.css";

interface TripFormProps {
  campsiteId: number;
}

function TripForm({ campsiteId }: TripFormProps) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { showNotice } = useNotice();
  const [people, setPeople] = useState(DEFAULT_PEOPLE);
  const [memo, setMemo] = useState("");
  const peopleInputRef = useRef<HTMLInputElement>(null);
  const { mutate, isPending, error } = useMutation({
    mutationFn: createTrip,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.trips.all() });
      showNotice("계획을 추가했습니다.");
      router.push("/trips");
    },
    onError: () => {
      peopleInputRef.current?.focus();
    },
  });

  function handlePeopleChange(event: ChangeEvent<HTMLInputElement>) {
    setPeople(Number(event.currentTarget.value));
  }

  function handleMemoChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setMemo(event.currentTarget.value);
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    mutate({ campsiteId, people, memo });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>캠핑 계획 추가</h2>
      <TextField
        ref={peopleInputRef}
        label="인원(1~8명)"
        type="number"
        name="people"
        value={people}
        onChange={handlePeopleChange}
        error={error?.message}
      />
      <label className={styles.field}>
        메모
        <textarea
          className={styles.textarea}
          name="memo"
          maxLength={200}
          value={memo}
          onChange={handleMemoChange}
        />
      </label>
      <p className={styles.preview}>
        캠핑장 {campsiteId}번 · {people}명 · {memo || "메모 없음"}
      </p>
      <Button type="submit" disabled={isPending}>
        계획 추가
      </Button>
    </form>
  );
}

export default TripForm;
